import { Checkbox, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import style from "./Sort.module.css";

const Sorting = () => {
  const [serchParam, setSerchParams] = useSearchParams();
  const initalState = serchParam.getAll("ringsize");
  const initalOrder = serchParam.get("order");
  const [category, setCategory] = useState(initalState || []);
  const [order, setorder] = useState(initalOrder || "");
  const [scroll, setScroll] = useState(0);


  const handleChange = (e) => {
    let newCat = [...category];
    let value = e.target.value;

    if (newCat.includes(value)) {
      newCat.splice(newCat.indexOf(value), 1);
    } else {
      newCat.push(value);
    }
    setCategory(newCat);
  };

  useEffect(() => {
    let params = {
      category,
    };

    order && (params.order = order);
    setSerchParams(params);

    window.addEventListener("scroll", () => {
      setScroll(window.pageYOffset);
    });

  }, [category, order]);

  return (
    <div className={style.sortcontainer}> 
      {/* top bar */} 
      <div>
        <div className={scroll > 450 ? style.topsort : style.topsort3}>
          <div>
            <h2>Ring size : </h2>
            <div className={style.sizeboxtop}>
              <Checkbox 
                size="lg"
                onChange={handleChange}
                value={5}
                defaultChecked={category.includes(5)}
                colorScheme="messenger"
              >
                5
              </Checkbox>
              <Checkbox
                size="lg"
                onChange={handleChange}
                defaultChecked={category.includes(6)}
                value={6}
                colorScheme="messenger"
              >
                6
              </Checkbox>
              <Checkbox
                size="lg"
                onChange={handleChange}
                defaultChecked={category.includes(7)}
                value={7}
                colorScheme="messenger"
              >
                7
              </Checkbox>
              <Checkbox
                size="lg"
                onChange={handleChange}
                defaultChecked={category.includes(8)}
                value={8}
                colorScheme="messenger"
              >
                8
              </Checkbox>
              <Checkbox
                size="lg"
                onChange={handleChange}
                defaultChecked={category.includes(9)}
                value={9}
                colorScheme="messenger"
              >
                9
              </Checkbox>
              <Checkbox
                size="lg"
                onChange={handleChange}
                defaultChecked={category.includes(10)}
                value={10}
                colorScheme="messenger"
              >
                10
              </Checkbox>
            </div>
          </div>
          <select onChange={(e) => setorder(e.target.value)} value={order} >
            <option value="asc"> Price: Low to High </option>
            <option value="desc"> Price: High to Low </option>
          </select>
        </div>
      </div>
      {/* side bar  */}
      <div className={style.head}>
        <h2> Filter By </h2>
        <div className={style.sizebox}>
          <h2>Ring size</h2>
          <Checkbox
            size="lg"
            onChange={handleChange}
            defaultChecked={category.includes(5)}
            value={5}
            colorScheme="messenger"
          >
            5 <span>(13)</span>
          </Checkbox>
          <Checkbox
            size="lg"
            onChange={handleChange}
            defaultChecked={category.includes(6)}
            value={6}
            colorScheme="messenger"
          >
            6 <span>(108)</span>
          </Checkbox>
          <Checkbox
            size="lg"
            onChange={handleChange}
            defaultChecked={category.includes(7)}
            value={7}
            colorScheme="messenger"
          >
            7 <span>(391)</span>
          </Checkbox>
          <Checkbox
            size="lg"
            onChange={handleChange}
            defaultChecked={category.includes(8)}
            value={8}
            colorScheme="messenger"
          >
            8 <span>(606)</span>
          </Checkbox>
          <Checkbox
            size="lg"
            onChange={handleChange}
            defaultChecked={category.includes(9)}
            value={9}
            colorScheme="messenger"
          >
            9 <span>(755)</span>
          </Checkbox>
          <Checkbox
            size="lg"
            onChange={handleChange}
            defaultChecked={category.includes(10)}
            value={10}
            colorScheme="messenger"
          >
            10 <span>(762)</span>
          </Checkbox>
        </div>
        <hr className={style.horizontal} />
        <div className={style.orderbox}>
          <h3> Price </h3>
          <RadioGroup onChange={setorder} value={order}>
            <Stack className={style.order}>
              <Radio name="order" value="desc">
                High to Low
              </Radio>
              <Radio name="order" value="asc">
                Low to High
              </Radio>
            </Stack>
          </RadioGroup>
        </div>
      </div>
    </div>
  );
};

export default Sorting;
