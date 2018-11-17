import { library } from '@fortawesome/fontawesome-svg-core'
import { 
  faGhost,
  faPhone, 
  faPaperPlane,
  faMapMarkerAlt,
  faAngleDown
} from '@fortawesome/free-solid-svg-icons'

export const addIconLibrary = () => {
  library.add(
    faGhost,
    faPhone,
    faPaperPlane,
    faMapMarkerAlt,
    faAngleDown
  )
}