import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// route-level code splitting
const ArticleView = () => import('../views/ArticleView.vue')
const About = () => import('../views/About.vue')
const Test = () => import('../views/Test.vue')
const Home = () => import('../views/Home.vue')
const Error404 = () => import('../views/Error404.vue')
const Login = () => import('../views/Login.vue')
const Register = () => import('../views/Register.vue')
const UserProfile = () => import('../views/MyProfile.vue')
const Password = () => import('../views/MyPassword.vue')
const Score = () => import('../views/MyScore.vue')
const Admin = () => import('../views/Admin.vue')
const Agreement = () => import('../views/Agreement.vue')
const Search = () => import('../views/Search.vue')
const FindPassword = () => import('../views/FindPassword.vue')
// requirement
const Requirement = () => import('../views/Requirement.vue')
const RequirementDetail = () => import('../views/RequirementDetail.vue')
const RequirementAdd = () => import('../views/RequirementAdd.vue')
const MyRequirement = () => import('../views/MyRequirement.vue')
// news
const News = () => import('../views/News.vue')
const NewsDetail = () => import('../views/NewsDetail.vue')
// product
const Product = () => import('../views/Product.vue')
const ProductDetail = () => import('../views/ProductDetail.vue')
// message
const Message = () => import('../views/MyMessage.vue')
//
const Subscribe = () => import('../views/MySubscribe.vue')
//
const CompanyRegister = () => import('../views/CompanyRegister.vue')

export function createRouter () {
    return new Router({
        mode: 'history',
        fallback: false,
        scrollBehavior: () => ({ y: 0 }),
        routes: [
            { path: '/articles/:id', component: ArticleView },
            { path: '/about', component: About },
            { path: '/test', component: Test },
            { path: '/requirements', component: Requirement },
            { path: '/requirements/:id', component: RequirementDetail },
            { path: '/requirement/add', component: RequirementAdd },
            { path: '/', component: Home },
            { path: '/login', component: Login },
            { path: '/register', component: Register },
            { path: '/me/profile', component: UserProfile },
            { path: '/me/password', component: Password },
            { path: '/admin', component: Admin },
            { path: '/me/score', component: Score },
            { path: '/me/requirements', component: MyRequirement },
            { path: '/agreement', component: Agreement },
            { path: '/search', component: Search },
            { path: '/find_password', component: FindPassword },
            { path: '/news', component: News },
            { path: '/news/:id', component: NewsDetail },
            { path: '/products', component: Product },
            { path: '/products/:id', component: ProductDetail },
            { path: '/me/messages', component: Message },
            { path: '/me/subscribes', component: Subscribe },
            { path: '/company/register', component: CompanyRegister },
            { path: '*', component: Error404 }
        ]
    })
}
