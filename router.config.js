import IntroduceController from "./src/intro/introduc.controller"
import MainActivityController from "./src/mainActivity/mainActivity.controller"
import PricelistController from "./src/banggia/banggia.controller"
import MyInlineWeb from "./src/map/map.view"
import NewsController from './src/news/news.controller'
import QuestionController from "./src/question/question.controller"
import CaculateController from "./src/calculatetest/calculate.controller"
import LoginController from "./src/login/login.controller"
import GoogleSearch from "./src/calculatetest/ggSearch.view"
import InforController from "./src/infor/infor.cotroller"
import MainCenterController from './src/mainCenter/mainCenter.controller'
import WebViewController from './src/webview/webview.controller'


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
    },
    {
        name:"question",
        component: QuestionController

    },
    {
        name:"calulate",
        component: CaculateController
    },
    {
        name:"login",
        component: LoginController
    },
    {
        name:"search",
        component: GoogleSearch

    },
    {
        name:"infor",
        component: InforController
    },
    {
        name:"mainCenter",
        component: MainCenterController
    },
    {
        name:"webview",
        component: WebViewController
    }
]