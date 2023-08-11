"use client"

import { useForm } from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import { userValidation } from "@/lib/validations/user"
import * as z from 'zod'

import { ImagePlus } from "../../node_modules/lucide-react"

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"

  import { Input } from "@/components/ui/input"
  import { Button } from "@/components/ui/button"
  import Image from "next/image"

interface Props {
    user:{
        id: string,
        objectId: string,
        username: string,
        name: string,
        bio: string,
        image: string
    },
    btnTitle: string
}

const AccountProfile = ({user, btnTitle}: Props) => {

    const form = useForm({
        resolver: zodResolver(userValidation),
        defaultValues: {
            profile_photo: '',
            name: '',
            username: '',
            bio: ''
        }
    })

    const onSubmit = (values: z.infer<typeof userValidation>) => {
        console.log(values)
      }
    
  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col justify-start gap-10">
      <FormField
        control={form.control}
        name="username"
        render={({ field }) => (
          <FormItem className="flex items-center gap-4">
            <FormLabel className="account-form_image-label">{field.value ? 
                <Image src={field.value} alt="profile pic" width={96} height={96} priority className="rounded-full object-contain"/> : 
                <ImagePlus className="object-contain h-8 w-8"/>} 
            </FormLabel>
            <FormControl>
              <Input placeholder="shadcn" {...field} />
            </FormControl>
            <FormDescription>
              This is your public display name.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <Button variant="destructive">Destructive</Button>
    </form>
  </Form>
  )
}

export default AccountProfile