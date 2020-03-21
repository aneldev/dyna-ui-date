import * as React from "react";

import {
  ETooltipDirection,
  DynaTooltip,
  EColor as ETooltipColor,
} from "dyna-ui-tooltip";

import { EMonthCalendarColor } from "../interfaces";

const styles = require("./Tooltip.module.less");

export interface ITooltipProps {
  className?: string;
  date: Date;
  color: EMonthCalendarColor;
  tooltipDirection?: ETooltipDirection;
  renderTooltip?: (date: Date) => JSX.Element | string | number | null;
  children: any;
}

export const Tooltip = (props: ITooltipProps): JSX.Element | any => {
  const {
    className,
    date,
    color: calendarColor,
    renderTooltip,
    tooltipDirection,
    children,
  } = props;

  if (!renderTooltip) return children;

  const color: ETooltipColor = (() => {
    switch (calendarColor) {
      case EMonthCalendarColor.GREY_CYAN: return ETooltipColor.WHITE_ORANGE;
      case EMonthCalendarColor.GREY_GREEN: return ETooltipColor.WHITE_ORANGE;
      default: return ETooltipColor.WHITE_ORANGE;
    }
  })();

  return (
    <DynaTooltip
      className={[className, styles.root].filter(Boolean).join(' ')}
      nodeType="div"
      color={color}
      tooltipContent={renderTooltip(date)}
      tooltipDirection={tooltipDirection}
    >
      {children}
    </DynaTooltip>
  );
};
