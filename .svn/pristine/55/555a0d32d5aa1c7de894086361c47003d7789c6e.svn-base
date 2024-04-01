package kr.or.ddit.cstmr.intrcn.mbrsh.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.inject.Inject;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import kr.or.ddit.cstmr.intrcn.mbrsh.service.CstmrMbrshService;
import kr.or.ddit.enumpkg.ServiceResult;
import kr.or.ddit.global.security.MberUser;
import kr.or.ddit.global.vo.MberVO;
import kr.or.ddit.global.vo.MbrshGrdVO;
import kr.or.ddit.global.vo.MbrshSetleVO;
import kr.or.ddit.global.vo.RegistVO;
import kr.or.ddit.global.vo.SetleVO;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
@RequestMapping("/mbrsh")
public class CstmrMbrshController {
	
	@Inject
	CstmrMbrshService service;
	
	@GetMapping
	public String mbrshList(
		Model model
	) {
		
	    List<MbrshGrdVO> mbrshList = service.retrieveMbrshList();
		
	    model.addAttribute("mbrshList", mbrshList);
	    
		return "cstmr/intrcn/mbrsh/mbrshList";
	}
	
	
	@GetMapping("{mbsGrdCd}")
	public String mbrshView(
		@PathVariable String mbsGrdCd
		, Model model
	) {
		
		log.info("=========>>>>>>>>>>>>>> {}", mbsGrdCd);
		
		List<MbrshGrdVO> mbsGrdList = service.retrieveMbrsh(mbsGrdCd);
		
		model.addAttribute("mbsGrdCd", mbsGrdCd);
		model.addAttribute("mbsGrdList", mbsGrdList);
		
		return "cstmr/intrcn/mbrsh/mbrshView";
	}
	
	@GetMapping("subscribe/{mbsGrdCd}")
	public String mbrshsubscribe(
		@PathVariable String mbsGrdCd
		, @MberUser MberVO user
		, Model model
	) {
		log.info("=========>>>>>>>>>>>>>> {}", user);
		
		MberVO realUser = service.retrieveSubscriber(user.getCstNo());
		
		MbrshGrdVO mbrsh = service.retrieveOneMbrsh(mbsGrdCd);
		
		if(mbrsh == null) {
			throw new RuntimeException();
		}
		
		model.addAttribute("mbsGrdCd", mbsGrdCd);
		
		model.addAttribute("mbrsh",mbrsh);
		
		model.addAttribute("realUser", realUser);
		
		return "cstmr/intrcn/mbrsh/subscribe";
	}

	@PostMapping("subscribe/{mbsGrdCd}")
	@ResponseBody
	public Map<String, Object> mbrshsubscribeProcess(
		@PathVariable String mbsGrdCd
		, @ModelAttribute("setleVo") SetleVO setleVo
		, @ModelAttribute("mbrshSetleVO") MbrshSetleVO mbrshSetleVO
	) {
		Map<String, Object> mbrshData = new HashMap<>();
		Map<String, Object> jsonData = new HashMap<>();
		
		mbrshData.put("setleVo", setleVo);
		mbrshData.put("mbrshSetleVO", mbrshSetleVO);
	
		ServiceResult result = service.createMbrshInfo(mbrshData);
		
		switch (result) {
		case OK:
			jsonData.put("message", "ok");
			break;

		default:
			jsonData.put("message", "error");
			break;
		}
		
		return jsonData;
	}
	
	@GetMapping("subDone")
	public String subDone() {
		
		
		return "cstmr/intrcn/mbrsh/subDone";
	}
}
