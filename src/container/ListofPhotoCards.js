import {ListOfPhotoCardsComponent} from "../components/ListOfPhotoCards";
import {withPhotos} from "../components/hoc/withPhotos";

export const ListOfPhotoCards = withPhotos(ListOfPhotoCardsComponent);
