import IntroduceController from "./src/intro/introduc.controller"
import MainActivityController from "./src/mainActivity/mainActivity.controller"
import PricelistController from "./src/banggia/banggia.controller"
import MyInlineWeb from "./src/map/map.view"
import NewsController from './src/news/news.controller'


export default
[
    {
        name: "Intro",
        component: IntroduceController,
        
    
    },
    {
        name: "Main",
        component: MainActivityController
    },
    {
        name: "Bang Gia",
        component: PricelistController
    },
    {
        name:"abc",
        component: MyInlineWeb
    },
    {
        name:"news",
        component: NewsController
    }
]