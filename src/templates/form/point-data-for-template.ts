import type { DataBase } from '@presenter/main-presenter';
import dayjs from 'dayjs';
import type { State } from '../../types/state';
import { correctName } from './destinations-template';

export const pointDataForTemplate = (data: State, dataBase: DataBase, isNewPoint: boolean) => {
  const { dateFrom, dateTo, type, destination, basePrice, selectedOffers } = data;

  switch (isNewPoint) {
    case false:
      return {
        timeStart: dayjs(dateFrom).format('DD/MM/YY HH:mm'),
        timeEnd: dayjs(dateTo).format('DD/MM/YY HH:mm'),
        destination,
        destinationName: correctName(destination, dataBase),
        type,
        basePrice: basePrice,
        selectedOffers,
        cancelButton: 'Delete',
        rollupButton: '<button class="event__rollup-btn" type="button">',
      };
    default:
      return {
        timeStart: dateFrom === '' ? '' : dayjs(dateFrom).format('DD/MM/YY HH:mm'),
        timeEnd: dateTo === '' ? '' : dayjs(dateTo).format('DD/MM/YY HH:mm'),
        destination,
        destinationName: destination ? correctName(destination, dataBase) : '',
        type,
        basePrice: basePrice,
        selectedOffers,
        cancelButton: 'Cancel',
        rollupButton: '<div hidden><button class="event__rollup-btn" type="button"></div>',
      };
  }
};
