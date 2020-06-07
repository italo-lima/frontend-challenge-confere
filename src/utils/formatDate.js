import {format, parseISO} from "date-fns"
import pt from 'date-fns/locale/pt'

export const formatDate = (date) => {
  return format(parseISO(date), "dd 'de' MMMM 'de' yyyy", {locale: pt})
}