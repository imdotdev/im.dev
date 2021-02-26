package api

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/imdotdev/im.dev/server/internal/session"
	"github.com/imdotdev/im.dev/server/internal/story"
	"github.com/imdotdev/im.dev/server/pkg/common"
	"github.com/imdotdev/im.dev/server/pkg/e"
)

func GetEditorPosts(c *gin.Context) {
	user := session.CurrentUser(c)
	ars, err := story.UserPosts(int64(user.ID))
	if err != nil {
		c.JSON(err.Status, common.RespError(err.Message))
		return
	}

	c.JSON(http.StatusOK, common.RespSuccess(ars))
}

func GetEditorPost(c *gin.Context) {
	id := c.Param("id")
	if id == "" {
		c.JSON(http.StatusBadRequest, common.RespError(e.ParamInvalid))
		return
	}

	user := session.CurrentUser(c)
	creator, err := story.GetPostCreator(id)
	if err != nil {
		c.JSON(err.Status, common.RespError(err.Message))
		return
	}

	if user.ID != creator {
		c.JSON(http.StatusForbidden, common.RespError(e.NoPermission))
		return
	}

	ar, err := story.GetPost(id, "")
	if err != nil {
		c.JSON(err.Status, common.RespError(err.Message))
		return
	}

	c.JSON(http.StatusOK, common.RespSuccess(ar))
}