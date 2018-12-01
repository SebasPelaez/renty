import { library } from '@fortawesome/fontawesome-svg-core'
import { 
  faGhost,
  faPhone, 
  faPaperPlane,
  faMapMarkerAlt,
  faAngleDown,
  faBarcode,
  faUsers,
  faCogs,
  faDoorClosed,
  faTachometerAlt,
  faPalette,
  faStore,
  faStar,
  faCar,
  faSuitcase
} from '@fortawesome/free-solid-svg-icons'

export const addIconLibrary = () => {
  library.add(
    faGhost,
    faPhone,
    faPaperPlane,
    faMapMarkerAlt,
    faAngleDown,
    faBarcode,
    faUsers,
    faCogs,
    faDoorClosed,
    faPalette,
    faTachometerAlt,
    faStore,
    faStar,
    faCar,
    faSuitcase
  )
}