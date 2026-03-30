import React,{useCallback} from 'react'
import { useForm } from 'react-hook-form'
import {Button, Input, Select, RTE} from '../index'
import appwriteService from "../../appwrite/config"
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function PostForm({post}) {
    const navigate = useNavigate();

    const {register, handleSubmit, watch, control, setValue, getValues} = useForm({
        defaultValues: {
            title: post?.title || '',
            slug: post?.slug || '',
            content: post?.content || '',
            staus: post?.status || 'active',
        },
    })

    const userData = useSelector(state => state.user.userData)

    const submit = async(data) => {
        if(post){
            const file = data.image[0]? appwriteService.uploadFile(data.image[0]) : null
            
            //joh purana uploaded image ha usko delete bhi krna ho gh.

            const db = await appwriteService.updatePost
            (post.$id, {
                ...data, 
                featuredImage: file ? file.$id : undefined,
            })
                if(db){
                    navigate(` /post/${db.$id}` )
                }
            }
        else {
            const file = await appwriteService.uploadFile(data.image[0]);

            if (file) {
                const fileId = file.$id;
                data.featuredImage = fileId;
                const dbPost = await appwriteService.createPost({ ...data, userId: userData.$id });

                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`);
                }
            }
        }

    }


  return (
    <div>PostForm</div>
  )
}

export default PostForm