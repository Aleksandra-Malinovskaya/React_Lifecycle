import React, { useState, useEffect } from "react";

const ChildComponent = ({ count }) => {
  return (
    <p>{count}</p>
  )
};

const shouldComponentUpdate = (prevProps, nextProps) => {
  if (nextProps.count % 2 === 1) {
      return true;
  }
  return false;
};

const MemoizedChildComponent = React.memo(ChildComponent, shouldComponentUpdate);

const LifecycleComponentFunction = () => {
  const [count, setCount] = useState(0);

  const apiRequest = async () => {
    try {
      const response = await fetch('https://todo-redev.herokuapp.com/api/users', {
        method: 'GET',
        headers:
        {
          'accept': 'application/json',
        }
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    apiRequest();
    return () => {
      console.log("Элемент будет размонтирован");
    }
  }, []);

  const increment = () => {
    setCount(count + 1);
  }

  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <div>
      <MemoizedChildComponent count={count} />
      <button onClick={increment}>Увеличить</button>
    </div>
  )
}

export default LifecycleComponentFunction;