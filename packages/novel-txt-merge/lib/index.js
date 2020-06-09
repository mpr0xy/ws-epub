"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tpl_1 = require("./tpl");
const debug_color2_1 = require("debug-color2");
exports.console = new debug_color2_1.Console(null, {
    enabled: true,
    inspectOptions: {
        colors: true,
    },
    chalkOptions: {
        enabled: true,
    },
});
exports.console.enabledColor = true;
function replaceTpl(tpl, data) {
    let r = new RegExp(`\\$\\{(${Object.keys(data).join('|')})\\}`, 'gu');
    return tpl
        .replace(r, (s, k) => {
        return data[k] || '';
    });
}
exports.replaceTpl = replaceTpl;
function makeDefaultTplData(inputOptions, opts) {
    inputOptions = {
        ...inputOptions,
        ...opts,
    };
    if (inputOptions.inputConfigPath) {
        try {
            let c = require(inputOptions.inputConfigPath);
            inputOptions = {
                ...inputOptions,
                ...c,
            };
            exports.console.info('將 inputConfigPath 內設定合併至本次執行參數內');
            exports.console.dir(inputOptions);
        }
        catch (e) {
            exports.console.error('[ERROR]', '讀取 inputConfigPath 時發生錯誤', e.message);
        }
    }
    //inputOptions.txtStyle = EnumTxtStyle.SHU_BOOK;
    let txtStyle = tpl_1.presetTxtStyle[inputOptions.txtStyle] || tpl_1.presetTxtStyle[0 /* NONE */];
    let tplBaseData = {};
    [
        'tplBannerStart',
        'tplVolumeStart',
        'tplChapterStart',
        'hr01',
        'hr02',
        'hr11',
        'hr12',
        'hr13',
    ].forEach(k => {
        if (inputOptions[k] == null) {
            inputOptions[k] = txtStyle[k];
        }
        inputOptions[k] = inputOptions[k] || '';
        tplBaseData[k] = inputOptions[k];
    });
    tplBaseData.eol = tpl_1.TPL_EOL;
    tplBaseData.eol2 = tpl_1.TPL_EOL2;
    return {
        inputOptions,
        tplBaseData,
    };
}
exports.makeDefaultTplData = makeDefaultTplData;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLCtCQUF3RTtBQUN4RSwrQ0FBdUM7QUFFMUIsUUFBQSxPQUFPLEdBQUcsSUFBSSxzQkFBTyxDQUFDLElBQUksRUFBRTtJQUN4QyxPQUFPLEVBQUUsSUFBSTtJQUNiLGNBQWMsRUFBRTtRQUNmLE1BQU0sRUFBRSxJQUFJO0tBQ1o7SUFDRCxZQUFZLEVBQUU7UUFDYixPQUFPLEVBQUUsSUFBSTtLQUNiO0NBQ0QsQ0FBQyxDQUFDO0FBRUgsZUFBTyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7QUFPNUIsU0FBZ0IsVUFBVSxDQUFDLEdBQVcsRUFBRSxJQUFjO0lBRXJELElBQUksQ0FBQyxHQUFHLElBQUksTUFBTSxDQUFDLFVBQVUsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUV0RSxPQUFPLEdBQUc7U0FDUixPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtJQUNyQixDQUFDLENBQUMsQ0FDRjtBQUNGLENBQUM7QUFURCxnQ0FTQztBQUNELFNBQWdCLGtCQUFrQixDQUFDLFlBQXdDLEVBQUUsSUFBYTtJQUV6RixZQUFZLEdBQUc7UUFDZCxHQUFHLFlBQVk7UUFDZixHQUFHLElBQUk7S0FDUCxDQUFDO0lBRUYsSUFBSSxZQUFZLENBQUMsZUFBZSxFQUNoQztRQUNDLElBQ0E7WUFDQyxJQUFJLENBQUMsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBRTlDLFlBQVksR0FBRztnQkFDZCxHQUFHLFlBQVk7Z0JBQ2YsR0FBRyxDQUFDO2FBQ0osQ0FBQztZQUVGLGVBQU8sQ0FBQyxJQUFJLENBQUMsaUNBQWlDLENBQUMsQ0FBQztZQUNoRCxlQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQzFCO1FBQ0QsT0FBTyxDQUFDLEVBQ1I7WUFDQyxlQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSwwQkFBMEIsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDaEU7S0FDRDtJQUVELGdEQUFnRDtJQUVoRCxJQUFJLFFBQVEsR0FBRyxvQkFBYyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxvQkFBYyxjQUFtQixDQUFDO0lBRTFGLElBQUksV0FBVyxHQVlYLEVBQVMsQ0FBQztJQUVkO1FBQ0MsZ0JBQWdCO1FBQ2hCLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07S0FDTixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUViLElBQUksWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksRUFDM0I7WUFDQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzlCO1FBRUQsWUFBWSxDQUFDLENBQUMsQ0FBQyxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFeEMsV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsQyxDQUFDLENBQUMsQ0FDRDtJQUVELFdBQVcsQ0FBQyxHQUFHLEdBQUcsYUFBTyxDQUFDO0lBQzFCLFdBQVcsQ0FBQyxJQUFJLEdBQUcsY0FBUSxDQUFDO0lBRTVCLE9BQU87UUFDTixZQUFZO1FBQ1osV0FBVztLQUNYLENBQUE7QUFDRixDQUFDO0FBMUVELGdEQTBFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElUeHRNZXJnZU9wdGlvbnMgfSBmcm9tICcuLi9pbmRleCc7XG5pbXBvcnQgeyBFbnVtVHh0U3R5bGUsIHByZXNldFR4dFN0eWxlLCBUUExfRU9MLCBUUExfRU9MMiB9IGZyb20gJy4vdHBsJztcbmltcG9ydCB7IENvbnNvbGUgfSBmcm9tICdkZWJ1Zy1jb2xvcjInO1xuXG5leHBvcnQgY29uc3QgY29uc29sZSA9IG5ldyBDb25zb2xlKG51bGwsIHtcblx0ZW5hYmxlZDogdHJ1ZSxcblx0aW5zcGVjdE9wdGlvbnM6IHtcblx0XHRjb2xvcnM6IHRydWUsXG5cdH0sXG5cdGNoYWxrT3B0aW9uczoge1xuXHRcdGVuYWJsZWQ6IHRydWUsXG5cdH0sXG59KTtcblxuY29uc29sZS5lbmFibGVkQ29sb3IgPSB0cnVlO1xuXG5leHBvcnQgaW50ZXJmYWNlIElUcGxEYXRhXG57XG5cdFtrOiBzdHJpbmddOiBzdHJpbmcsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlVHBsKHRwbDogc3RyaW5nLCBkYXRhOiBJVHBsRGF0YSlcbntcblx0bGV0IHIgPSBuZXcgUmVnRXhwKGBcXFxcJFxcXFx7KCR7T2JqZWN0LmtleXMoZGF0YSkuam9pbignfCcpfSlcXFxcfWAsICdndScpO1xuXG5cdHJldHVybiB0cGxcblx0XHQucmVwbGFjZShyLCAocywgaykgPT4ge1xuXHRcdFx0cmV0dXJuIGRhdGFba10gfHwgJydcblx0XHR9KVxuXHQ7XG59XG5leHBvcnQgZnVuY3Rpb24gbWFrZURlZmF1bHRUcGxEYXRhKGlucHV0T3B0aW9ucz86IFBhcnRpYWw8SVR4dE1lcmdlT3B0aW9ucz4sIG9wdHM/OiBvYmplY3QpXG57XG5cdGlucHV0T3B0aW9ucyA9IHtcblx0XHQuLi5pbnB1dE9wdGlvbnMsXG5cdFx0Li4ub3B0cyxcblx0fTtcblxuXHRpZiAoaW5wdXRPcHRpb25zLmlucHV0Q29uZmlnUGF0aClcblx0e1xuXHRcdHRyeVxuXHRcdHtcblx0XHRcdGxldCBjID0gcmVxdWlyZShpbnB1dE9wdGlvbnMuaW5wdXRDb25maWdQYXRoKTtcblxuXHRcdFx0aW5wdXRPcHRpb25zID0ge1xuXHRcdFx0XHQuLi5pbnB1dE9wdGlvbnMsXG5cdFx0XHRcdC4uLmMsXG5cdFx0XHR9O1xuXG5cdFx0XHRjb25zb2xlLmluZm8oJ+WwhyBpbnB1dENvbmZpZ1BhdGgg5YWn6Kit5a6a5ZCI5L216Iez5pys5qyh5Z+36KGM5Y+D5pW45YWnJyk7XG5cdFx0XHRjb25zb2xlLmRpcihpbnB1dE9wdGlvbnMpO1xuXHRcdH1cblx0XHRjYXRjaCAoZSlcblx0XHR7XG5cdFx0XHRjb25zb2xlLmVycm9yKCdbRVJST1JdJywgJ+iugOWPliBpbnB1dENvbmZpZ1BhdGgg5pmC55m855Sf6Yyv6KqkJywgZS5tZXNzYWdlKTtcblx0XHR9XG5cdH1cblxuXHQvL2lucHV0T3B0aW9ucy50eHRTdHlsZSA9IEVudW1UeHRTdHlsZS5TSFVfQk9PSztcblxuXHRsZXQgdHh0U3R5bGUgPSBwcmVzZXRUeHRTdHlsZVtpbnB1dE9wdGlvbnMudHh0U3R5bGVdIHx8IHByZXNldFR4dFN0eWxlW0VudW1UeHRTdHlsZS5OT05FXTtcblxuXHRsZXQgdHBsQmFzZURhdGE6IHtcblx0XHQndHBsQmFubmVyU3RhcnQnOiBzdHJpbmc7XG5cdFx0J3RwbFZvbHVtZVN0YXJ0Jzogc3RyaW5nO1xuXHRcdCd0cGxDaGFwdGVyU3RhcnQnOiBzdHJpbmc7XG5cdFx0J2hyMDEnOiBzdHJpbmc7XG5cdFx0J2hyMDInOiBzdHJpbmc7XG5cdFx0J2hyMTEnOiBzdHJpbmc7XG5cdFx0J2hyMTInOiBzdHJpbmc7XG5cdFx0J2hyMTMnOiBzdHJpbmc7XG5cblx0XHQnZW9sJzogc3RyaW5nO1xuXHRcdCdlb2wyJzogc3RyaW5nO1xuXHR9ID0ge30gYXMgYW55O1xuXG5cdFtcblx0XHQndHBsQmFubmVyU3RhcnQnLFxuXHRcdCd0cGxWb2x1bWVTdGFydCcsXG5cdFx0J3RwbENoYXB0ZXJTdGFydCcsXG5cdFx0J2hyMDEnLFxuXHRcdCdocjAyJyxcblx0XHQnaHIxMScsXG5cdFx0J2hyMTInLFxuXHRcdCdocjEzJyxcblx0XS5mb3JFYWNoKGsgPT4ge1xuXG5cdFx0aWYgKGlucHV0T3B0aW9uc1trXSA9PSBudWxsKVxuXHRcdHtcblx0XHRcdGlucHV0T3B0aW9uc1trXSA9IHR4dFN0eWxlW2tdO1xuXHRcdH1cblxuXHRcdGlucHV0T3B0aW9uc1trXSA9IGlucHV0T3B0aW9uc1trXSB8fCAnJztcblxuXHRcdHRwbEJhc2VEYXRhW2tdID0gaW5wdXRPcHRpb25zW2tdO1xuXHR9KVxuXHQ7XG5cblx0dHBsQmFzZURhdGEuZW9sID0gVFBMX0VPTDtcblx0dHBsQmFzZURhdGEuZW9sMiA9IFRQTF9FT0wyO1xuXG5cdHJldHVybiB7XG5cdFx0aW5wdXRPcHRpb25zLFxuXHRcdHRwbEJhc2VEYXRhLFxuXHR9XG59XG4iXX0=