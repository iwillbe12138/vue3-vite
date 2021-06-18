/*
 * @Description: axios restful 封装
 * @Author: iwillbe12138
 * @Date: 2021-06-17 14:51:03
 * @LastEditTime: 2021-06-18 09:13:44
 * @LastEditors: iwillbe12138
 */
import axios from "axios";
import qs from "qs";
import config from '~/config'


axios.defaults.baseURL = config[import.meta.env.MODE].baseUrl //正式
// axios.defaults.baseURL = 'http://test' //测试

axios.defaults.timeout = 10000;

//  请求拦截器
axios.interceptors.request.use(
  (config) => {
    config.headers["Content-Type"] = "application/json;charset=UTF-8";
    // let token = sessionStorage.getItem('loginToken') || null
    // if (token) {
    //   // 如果token不为null，否则传token给后台
    //   config.headers['Token'] = token
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
axios.interceptors.response.use(
  (response) => {
    const res = response.data;
    //届时根据后端返回success或者code值判断
    if (res.success === true) {
      return res;
    } else {
      return res;
    }
  },
  (error) => {
    //响应错误
    return Promise.reject(error);
  }
);

export  function post(url, data) {
    return new Promise((resolve, reject) => {
        axios.post(url, data)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });

    });
  }

  export  function get(url) {
    return new Promise((resolve, reject) => {
      axios
        .get(url)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  export  function put(url, data) {
    return new Promise((resolve, reject) => {
        axios.put(url, data)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });

    });
  }

  export  function patch(url, data) {
    return new Promise((resolve, reject) => {
        axios.patch(url, data)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });

    });
  }

  export  function Delete(url,data) {
    url=`${url}/${data}`;
    return new Promise((resolve, reject) => {
      axios
        .delete(url)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  export  function getById(url,data) {
    url=`${url}/${data}`;
    return new Promise((resolve, reject) => {
      axios
        .get(url)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
