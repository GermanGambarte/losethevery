import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration)

export const generateConciseAdjective = async (
  simpleAdjective: string
): Promise<string> => {
  try {
    const suggestions = await openai.createCompletion({
      model: 'text-davinci-003',
      // eslint-disable-next-line no-useless-escape
      prompt: `Combine the word \"very\" with another adjective to finde a more suitable adjective\n\nvery + wild = feral\nvery + neccesary = imminent\nvery + loving = affectionate\nvery + high = grand\nvery + ${simpleAdjective} =`,
      temperature: 1,
      max_tokens: 20,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0
    })

    const { text } = suggestions.data.choices[0]

    if (text === undefined || text === '') {
      throw new Error('Invalid response')
    }

    return text
  } catch (error) {
    throw new Error('Something went wrong')
  }
}

export const generateSimpleAdjective = async (): Promise<string> => {
  try {
    const suggestions = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: 'Come up with one random adjective that goes well with the word "very" in front of it.\nadjective = very',
      temperature: 1,
      max_tokens: 25,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0
    })

    const { text } = suggestions.data.choices[0]

    if (text === undefined || text === '') {
      throw new Error('Invalid response')
    }

    return text.trim()
  } catch (error) {
    throw new Error('Something went wrong')
  }
}
