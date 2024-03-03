import { Configuration ,OpenAIApi } from 'openai';
import { dotens } from 'dotenv';
dotenv.config()


const configuration = new Configuration({
    apikey: process.env.OpenAI_API_KEY
});
  
const openai = new OpenAIApi(configuration);


