import type { FilterType } from '../const';
import { isFutureWaypoints, isPresentWaypoints, isPastWaypoints } from '../utils/time';
import type { Waypoint } from '../types/waypoint-type';

const filter: Record<FilterType, (waypoints: Waypoint[]) => Waypoint[]> = {
  everything: (waypoints) => waypoints,
  future: (waypoints) => waypoints.filter((waypoint) => isFutureWaypoints(waypoint.dateFrom)),
  present: (waypoints) => waypoints.filter((waypoint) => isPresentWaypoints(waypoint.dateFrom, waypoint.dateTo)),
  past: (waypoints) => waypoints.filter((waypoint) => isPastWaypoints(waypoint.dateTo)),
};

function generateFilter(waypoints: Waypoint[]) {
  return Object.entries(filter).map(([type, filterWaypoints]) => {
    const filteredPoints = filterWaypoints(waypoints);

    return {
      type,
      count: filteredPoints.length,
      points: filteredPoints,
    };
  });
}

export type Filters = ReturnType<typeof generateFilter>;

export { generateFilter };