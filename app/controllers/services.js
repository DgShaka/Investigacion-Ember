import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class ServicesController extends Controller {
  
  //Este service es utilizado en el template de services para mostrar los objetos en forma de UI, cualquier cambio a esta propiedad actualizaria la interfaz grafica con los nuevos cambios
  @tracked services = [
    {
      id: 1,
      title: 'Orthodontics',
      description:
        'Orthodontics is a specialty of dentistry that is responsible for the correction of teeth and bones positioned incorrectly.',
      image: 'assets/Orthodontics.png',
    },
    {
      id: 2,
      title: 'Dental surgery',
      description:
        'Dentistry specialty that deals with diagnosis and surgical treatment of diseases, wounds and defects of the mouth and the tooth structure.',
      image: 'assets/DentalSurgery.png',
    },
    {
      id: 3,
      title: 'Endodontics',
      description:
        'A nerve or endodontic treatment consists of a removal of the dental pulp affected by caries or trauma, thus saving the dental pleza',
      image: 'assets/Endodontics.png',
    },
    {
      id: 4,
      title: 'Periodontology',
      description:
        'Prevention, diagnosis and treatment of diseases and conditions that affect the tissues that support the teeth.',
      image: 'assets/Periodontology.png',
    },
    {
      id: 5,
      title: 'General dentistry',
      description:
        'General dentistry consists of treatments preventive and restorative such as: leggings, cleanings, extractions, among others.',
      image: 'assets/GeneralDentistry.png',
    },
    {
      id: 6,
      title: 'Dental implants',
      description:
        'Designed to replace the root and crown missing tooth, made of materials high quality biocompatible.',
      image: 'assets/DentalImplants.png',
    },
  ];
}
