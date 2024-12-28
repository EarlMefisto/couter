
export type CounterPropsType = {
  count: number
  maxCount: number
};

export const Counter = (props: CounterPropsType) => {


    return(
        <div>
            <span className={props.count >= props.maxCount ? "stop" : ""} >{props.count}</span>
        </div>
    )
}