import Promotions from './pages/promotions/promotions'
import PromotionDetails from './pages/promotion-details/promotion-details'
const routes =  [
  {
    path: '/',
    component: Promotions,
  },
  {
    path: '/:id',
    component: PromotionDetails,
  }
]

export default routes