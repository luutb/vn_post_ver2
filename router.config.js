import IntroduceController from "./src/intro/introduc.controller"
import MainActivityController from "./src/mainActivity/mainActivity.controller"
import PricelistController from "./src/banggia/banggia.controller"


export default
[
    {
        name: "Intro",
        component: IntroduceController
    },
    {
        name: "Main",
        component: MainActivityController
    },
    {
        name: "Bang Gia",
        component: PricelistController
    }
]