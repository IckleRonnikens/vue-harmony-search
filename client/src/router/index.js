import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'

import About from '@/components/about/About'

import Blog from '@/components/blog/Blog'
import CreateBlogPosts from '@/components/blog/CreateBlogPosts'
import ViewBlogPosts from '@/components/blog/ViewBlogPosts'
import EditBlogPosts from '@/components/blog/EditBlogPosts'
import EditBlog from '@/components/blog/EditBlog'
import BlogEntry from '@/components/blog/BlogEntry'

import Guides from '@/components/guides/Guides'
import CreateInstructionGuide from '@/components/guides/CreateInstructionGuide'
import ViewInstructionGuide from '@/components/guides/ViewInstructionGuide'
import EditInstructionGuide from '@/components/guides/EditInstructionGuide'
import EditGuides from '@/components/guides/EditGuides'
import GuideEntry from '@/components/guides/GuideEntry'

import Contact from '@/components/contact/Contact'
import ContactForm from '@/components/contact/ContactForm'
import ContactDetails from '@/components/contact/ContactDetails'
import ContactLocation from '@/components/contact/ContactLocation'

import Navbar from '@/components/Navbar'
import Register from '@/components/Register'
import Login from '@/components/Login'

import Search from '@/components/Search'

import NotFound from '@/components/NotFound'


Vue.use(Router)


export default new Router({

    routes : [
        {
            path:'/',
            name:'index',
            component: Index
        },
        {
            path:'/navbar',
            name:'navbar',
            component: Navbar
        },
        {
            path:'/guides',
            name:'guides',
            component: Guides
        },
        {
            path:'/guides/edit',
            name:'editguides',
            component: EditGuides
        },
        {
            path:'/guides/create',
            name:'create-instruction-guide',
            component: CreateInstructionGuide
        },
        {
            path:'/guides/view',
            name:'view-instruction-guide',
            component: ViewInstructionGuide
        },
        {
            path:'/guides/view/:instructionGuideId',
            name:'guideentry',
            component: GuideEntry
        },
        {
            path:'/guides/:instructionGuideId/edit',
            name:'edit-instruction-guide',
            component: EditInstructionGuide
        },
        {
            path:'/register',
            name:'register',
            component: Register
        },
        {
            path:'/login',
            name:'login',
            component: Login
        },
        {
            path:'/search',
            name:'search',
            component: Search
        },
        {
            path:'/about',
            name:'about',
            component: About
        },
        {
            path:'/blog',
            name:'blog',
            component: Blog
        },
        {
            path:'/blog/create',
            name:'createblogposts',
            component: CreateBlogPosts
        },
        {
            path:'/blog/view',
            name:'viewblogposts',
            component: ViewBlogPosts
        },
        {
            path:'/blog/view/:BlogPostsId',
            name:'blogentry',
            component: BlogEntry
        },
        {
            path:'/blog/edit',
            name:'editblog',
            component: EditBlog
        },
        {
            path:'/blog/:BlogPostsId/edit',
            name:'editblogposts',
            component: EditBlogPosts
        },
        {
            path:'/contact',
            name:'contact',
            component: Contact
        },
        {
            path:'/contact/contact-form',
            name:'contact-form',
            component: ContactForm
        },
        {
            path:'/contact/contact-details',
            name:'contact-details',
            component: ContactDetails
        },
        {
            path:'/contact/contact-location',
            name:'contact-location',
            component: ContactLocation
        },
        { path: '/404', component: NotFound },  
        { path: '*', redirect: '/404' }
    ],
    
})