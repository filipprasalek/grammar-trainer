import { defineStore } from 'pinia'

type GrammarRuleExample = {
  example: string
  translation: string
}

export interface GrammarCard {
  id: string
  title: string
  description: string
  examples: GrammarRuleExample[]
}

// interface Store {
//   currentCardIndex: number
//   grammarCards: GrammarCard[]
//   getCurrentCard: () => GrammarCard
//   nextCard: () => void
//   previousCard: () => void
// }

export const useGrammarStore = defineStore('grammar', {
  state: () => ({
    currentCardIndex: 0,
    grammarCards: [
      {
        id: 'preterito-perfecto',
        title: 'Pretérito Perfecto',
        description: "The Pretérito Perfecto is used to describe actions that have been completed in the past but are still relevant to the present moment. It is formed with the auxiliary verb 'haber' (conjugated in the present tense) and the past participle of the main verb. This tense is commonly used in Spain to talk about recent events or experiences.",
        examples: [
          {
            example: "Yo he comido paella.",
            translation: "I have eaten paella."
          },
          {
            example: "Tú has estudiado mucho.",
            translation: "You have studied a lot."
          },
          {
            example: "Él/Ella ha viajado a México.",
            translation: "He/She has traveled to Mexico."
          },
          {
            example: "Nosotros/Nosotras hemos visto la película.",
            translation: "We have watched the movie."
          },
          {
            example: "Vosotros/Vosotras habéis terminado el proyecto.",
            translation: "You all have finished the project."
          },
          {
            example: "Ellos/Ellas han escrito una carta.",
            translation: "They have written a letter."
          }
        ]
      },
      {
        id: 'futuro-simple',
        title: 'Futuro Simple',
        description: "The Futuro Simple is used to describe actions that will happen in the future. It is formed by adding specific endings to the infinitive form of the verb. This tense is often used to express predictions, promises, or future plans.",
        examples: [
          {
            example: "Yo comeré paella mañana.",
            translation: "I will eat paella tomorrow."
          },
          {
            example: "Tú estudiarás mucho para el examen.",
            translation: "You will study a lot for the exam."
          },
          {
            example: "Él/Ella viajará a México el próximo año.",
            translation: "He/She will travel to Mexico next year."
          },
          {
            example: "Nosotros/Nosotras veremos la película este fin de semana.",
            translation: "We will watch the movie this weekend."
          },
          {
            example: "Vosotros/Vosotras terminaréis el proyecto pronto.",
            translation: "You all will finish the project soon."
          },
          {
            example: "Ellos/Ellas escribirán una carta la próxima semana.",
            translation: "They will write a letter next week."
          }
        ]
      }
    ]
  }),
  
  getters: {
    getCurrentCard: (state) => state.grammarCards[state.currentCardIndex] ?? { id: '', title: '', description: '', examples: [] }
  },

  actions: {
    nextCard() {
      console.log('nextCard', this.currentCardIndex);
      if (this.currentCardIndex === this.grammarCards.length - 1) {
        this.currentCardIndex = 0;
        return;
      }
      this.currentCardIndex++;
    },
    previousCard() {
      if (this.currentCardIndex === 0) {
        this.currentCardIndex = this.grammarCards.length - 1;
        return
      }
      this.currentCardIndex--;
    },
  }
})