import { UserSimple} from './user'
import { Tag } from './tag';


export enum StoryStatus {
    Draft = 1,
    Published = 2,
    Hidden = 3 ,
    Forbidden = 4
}

export interface Story {
    id?: string 
    type?: string
    slug?: string 
    creator?: UserSimple
    creatorId?: string
    owner?: UserSimple
    ownerId?:string
    title?: string 
    md?: string
    url?: string 
    cover?: string 
    brief?: string 
    created?: string
    updated?:string
    tags?: string[]
    rawTags?: Tag[]
    views?: number
    likes? : number
    liked? : boolean
    pinned?: boolean
    comments? : number
    bookmarked?: boolean
    status?: number
}