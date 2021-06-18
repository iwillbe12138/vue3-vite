/*
 * @Description: api--user
 * @Author: iwillbe12138
 * @Date: 2021-06-17 15:35:41
 * @LastEditTime: 2021-06-18 09:14:37
 * @LastEditors: iwillbe12138
 */
import {get,post,put,patch,Delete,getById} from "../../utils/request";

//测试接口 --get
export function getTest() {
  return get("/test");
}

export function getTestPost(data) {
  return post("/test_post",data);
}
export function getTestPut(data) {
  return put("/test_put",data);
}
export function getTestPatch(data) {
  return patch("/test_patch",data);
}
export function getTestDelete(data) {
  return Delete("/test_delete",data);
}
export function getTestGetById(data) {
  return getById("/test_getById",data);
}