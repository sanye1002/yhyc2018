package cn.popo.news.core.controller.oa;

import cn.popo.news.common.utils.StatisticsInfoGetUtil;
import cn.popo.news.common.utils.ToolUtil;
import cn.popo.news.core.utils.ResultVOUtil;
import cn.popo.news.core.vo.ResultVO;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.Map;

@Controller
@RequestMapping("/oa/statistics")
@Slf4j
public class UserRealInfo {
    /**
     * 分类列表显示
     */
    @ResponseBody
    @GetMapping("/list")
    public ResultVO<Map<String,Object>> allClassify(HttpServletRequest httpServletRequest){
        Map<String,Object> map  = new HashMap<>();
//        System.out.println(StatisticsInfoGetUtil.getIpAddr(httpServletRequest));
        System.out.println(ToolUtil.getClientIp(httpServletRequest));
        StatisticsInfoGetUtil.getSystemAndBrowser(httpServletRequest);
        StatisticsInfoGetUtil.getVisitUitl(httpServletRequest);

        return ResultVOUtil.success(map);
    }

    /**
     * 所有分类展示
     */
    @GetMapping("/test")
    public ModelAndView list(Map<String, Object> map
                            ) {
        map.put("pageId", 33333);
        map.put("pageTitle", "操作分类列表");

        return new ModelAndView("pages/test", map);
    }
}
