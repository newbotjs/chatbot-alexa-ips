import code from './main.converse'
import alexaBuySkill from './skills/alexa-buy/alexa-buy'

export default {
    code,
    skills: { 
        alexaBuySkill: {
            skill: alexaBuySkill,
             // https://newbot.io/en/docs/skills/conditional.html
            condition(data) {
                return data.session.source == 'alexa'
            }
        }
    }
}