import axios from "axios";
const http = axios.create({
  baseURL: "https://elm.cangdu.org",
  time: 10000
});

// address 文本？ 不能进行距离计算
// lbs lat log
export const searchplace = (cityid, keyword) =>
  new Promise((resolve, reject) => {
    const url = `/v1/pois?type=search&city_id=${cityid}&keyword=${keyword}`;
    http.get(url).then(res => resolve(res.data));
  });
export const currentcity = cityid =>
  new Promise((resolve, reject) => {
    const url = `/v1/cities/${cityid}`;
    http.get(url).then(res => {
      resolve(res);
    });
  });
// axios  核心xhr
// fetch 两大缺点
// 1 兼容性
// 2 api 比较原始
export const cityGuess = () =>
  new Promise((resolve, reject) => {
    fetch("https://elm.cangdu.org/v1/cities?type=guess")
      .then(res => res.json())
      .then(data => resolve(data))
      .then(err => reject(err));
  });

// export const cityGuess = () =>
//   fetch("https://elm.cangdu.org/v1/cities?type=guess");
// 获取城市地点不是前端可以搞定的，应该提供一个api 让后端处理，至少要有这个思想
// export const hotcity = () => fetch("https://elm.cangdu.org/v1/cities?type=hot");

export const hotcity = () =>
  new Promise((resolve, reject) => {
    fetch("https://elm.cangdu.org/v1/cities?type=hot")
      .then(res => res.json())
      .then(data => resolve(data))
      .then(err => reject(err));
  });
export const getcaptchas = () =>
  new Promise((resolve, reject) => {
    fetch("https://elm.cangdu.org/v1/captchas", {
      method: "POST",
      body: {},
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
  });
