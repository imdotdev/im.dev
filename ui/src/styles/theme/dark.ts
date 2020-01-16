/* eslint-disable quotes */
import {theme} from './index'
let colors = require('@ant-design/colors')

let darkTheme:theme = {
    '@primary-color': '#0A53B0',
    '@layout-body-background': '#171717',
    '@background-color-base': '#262626',
    '@body-background': '#404041',
    '@layout-sider-background': '#171F22',
    '@component-background': '#171F22',
    '@layout-header-background': '#171F22',
    '@menu-dark-submenu-bg': '#171F22',
    '@input-bg': '#313133',
    '@btn-default-bg': '#262626',
    '@border-color-base': 'rgba(255, 255, 255, 0.25)',
    '@border-color-split': '#363636',
    '@heading-color': '#E3E3E3',
    '@text-color': '#E3E3E3',
    '@text-color-secondary': 'fade(#fff, 65%)',
    '@table-selected-row-bg': '#3a3a3a',
    '@table-expanded-row-bg': '#3b3b3b',
    '@table-header-bg': '#3a3a3b',
    '@table-row-hover-bg': '#3a3a3b',
    '@layout-trigger-color': 'fade(#fff, 80%)',
    '@layout-trigger-background': '#313232',
    '@alert-message-color': 'fade(#000, 67%)',
    '@item-hover-bg': "fade(" + colors.blue[5] + ", 20%)",
    '@item-active-bg': "fade(" + colors.blue[5] + ", 40%)",
    '@disabled-color': 'rgba(255, 255, 255, 0.25)',
    '@tag-default-bg': '#262628',
    '@popover-bg': '#262629',
    '@wait-icon-color': 'fade(#fff, 64%)',
    '@background-color-light': "fade(" + colors.blue[5] + ", 40%)",
    '@collapse-header-bg': '#262629',
    '@info-color': '#313133',
    '@highlight-color': colors.red[7],
    '@warning-color': colors.gold[9],
    '@menu-dark-highlight-color': "#fff"
}
export default darkTheme