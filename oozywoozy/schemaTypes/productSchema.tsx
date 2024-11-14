import { TrolleyIcon } from "@sanity/icons";
import { Rule } from "postcss";
import { title } from "process";
import { defineField, defineType } from "sanity";
import { media } from "sanity-plugin-media";

export const productSchema = defineType({
    name: 'productType',
    title: 'Product Type',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Product Title',
            type: 'string',
            icon: TrolleyIcon,
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96
            }
        }),
        defineField({
            name: 'image',
            title: 'Product Image',
            type: 'image',
            options: {
                hotspot: true,
            }
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'blockContent',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'discountedprice',
            title: 'Product Discounted Price',
            type: 'number',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'actualprice',
            title: 'Product Actual Price',
            type: 'number',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'array',
            of: [{type: 'reference', to: {type: 'category'}}],
        }),
    ],
    preview: {
        select: {
            title: 'name',
            media: 'image',
            subtitle: 'price'
        },
        prepare(select){
            return{
                title: select.title,
                subtitle: select.subtitle,
                media: select.media,
            };
        }
    }
})