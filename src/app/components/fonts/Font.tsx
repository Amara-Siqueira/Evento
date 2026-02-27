import { Noto_Serif } from "next/font/google";
import { Alegreya } from "next/font/google";
 export const notoSerif = Noto_Serif({
  subsets:['latin'],
  weight:['100', '300','600','700']
})

export const alegreya= Alegreya({
  subsets:['latin'],
  weight:['400','700']

})