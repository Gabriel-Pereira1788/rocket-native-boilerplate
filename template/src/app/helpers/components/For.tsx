import React from 'react';

type ForProps<TData> = {
  data?: TData[];
  render: (data: TData, index?: number) => JSX.Element;
};

export function For<TData>({ data, render }: ForProps<TData>) {
  return (
    <>
      {data &&
        data.length &&
        data.map((item, index) => {
          return render(item, index);
        })}
    </>
  );
}
