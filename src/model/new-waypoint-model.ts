import { DEFAULT_DESTINATION } from '../mock/const';

export default class NewWaypointModel {
  #waypoint = DEFAULT_DESTINATION;
  get newWaypoint() {
    return this.#waypoint;
  }
}
