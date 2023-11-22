import z from "zod"

const AzureTagArray = z.array(
	z.object({
		name:z.string(),
		confidence:z.number()
	})
)
export {AzureTagArray}
export type AzureTagArray = z.infer<typeof AzureTagArray>