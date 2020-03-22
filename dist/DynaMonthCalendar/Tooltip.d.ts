import { ETooltipDirection } from "dyna-ui-tooltip";
import { EMonthCalendarColor } from "../interfaces";
export interface ITooltipProps {
    className?: string;
    date: Date;
    color: EMonthCalendarColor;
    tooltipDirection?: ETooltipDirection;
    renderTooltip?: (date: Date) => JSX.Element | string | number | null;
    children: any;
}
export declare const Tooltip: (props: ITooltipProps) => any;
