/**
 * Created by user on 2017/12/15/015.
 */
import { Options as IMinifyOptions } from 'html-minifier';
export declare function formatHTML(htmlstr: any, skipFormatting?: boolean): string;
export declare function htmlminify(html: string, options?: IMinifyOptions): any;
import * as self from './index';
export default self;
