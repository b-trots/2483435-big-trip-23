import AbstractView from '../../framework/view/abstract-view';

const TEMPLATE = '<ul class="trip-events__list"></ul>';

export default class listView extends AbstractView<HTMLUListElement> {
  get template() {
    return TEMPLATE;
  }
}