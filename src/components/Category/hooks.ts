import { useMemo } from "react";
import { ICategoryProps } from "./types";

export const useCategory = (props: ICategoryProps) => {
  const { list } = props;

  const data = useMemo(() => {
    return list?.slice(0, 10);
  }, [list]);

  const showMore = useMemo(() => list?.length > 10, [list?.length]);
  return {
    data,
    showMore,
    ...props,
  };
};
