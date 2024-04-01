package kr.or.ddit.cstmr.recom.controller;

import java.security.Principal;

import javax.inject.Inject;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import kr.or.ddit.cstmr.recom.service.CstmrRecomSbrsService;
import kr.or.ddit.global.security.MberUser;
import kr.or.ddit.global.vo.MberVO;
import kr.or.ddit.global.vo.ScrapVO;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
@RequestMapping("/recom")
public class SbrsScrapController {

	@Inject
	private CstmrRecomSbrsService serviceSbrs;
	
	@PostMapping("insertSbrs")
	public String insertSbrs(@RequestParam String sbrsCd, @MberUser MberVO mber, Principal authPrincipal, Model model) {
		
		boolean isSbrsExist = serviceSbrs.checkSbrsScrap(mber.getCstNo(), sbrsCd);
		
		if(isSbrsExist) {
			model.addAttribute("errorMsg", "이미 스크랩한 항목입니다.");
		} else {
			ScrapVO newSbrs = new ScrapVO();
			newSbrs.setCstNo(mber.getCstNo());
			newSbrs.setScrapNo(sbrsCd);
			int rowcnt = serviceSbrs.insertSbrsScrap(newSbrs);
			log.info("rowcnt {}", rowcnt);
		}
		
		model.addAttribute("isSbrsExist",isSbrsExist);
		return null;
	}
}
