import z from "zod"

const TagItem = z.object({
	name:z.string(),
	confidence:z.number()
})
export {TagItem}
export type TagItem = z.infer<typeof TagItem>


const TagUrlItem = TagItem.extend({
	url:z.string()
})
export type TagUrlItem = z.infer<typeof TagUrlItem>


const AzureTagArray = z.array(
	TagItem
)
export {AzureTagArray}
export type AzureTagArray = z.infer<typeof AzureTagArray>