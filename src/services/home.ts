import { get, post } from "../utils/request";
import API from '../constants/api'

export const getYiYan = async (params?: any) => post(API.yiyan);