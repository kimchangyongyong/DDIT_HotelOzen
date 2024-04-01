package kr.or.ddit.cstmr.myinfo.controller;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.List;

import javax.inject.Inject;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import kr.or.ddit.cstmr.myinfo.service.CstmrMyInfoService;
import kr.or.ddit.cstmr.rsvt.service.CstmrRsvtRetrieveService;
import kr.or.ddit.global.security.MberUser;
import kr.or.ddit.global.validate.UpdateGroup;
import kr.or.ddit.global.vo.MberVO;
import kr.or.ddit.global.vo.RegistVO;
import kr.or.ddit.global.vo.RsvtDetailsVO;
import kr.or.ddit.global.vo.RsvtVO;

@Controller
@RequestMapping("/myinfo")
public class CstmrMyInfoController {

	@Inject
	private CstmrMyInfoService service;
	
	@Inject
	private CstmrRsvtRetrieveService rsvtService;	
	
	MberVO user;
	
	@GetMapping("/mypage.do")
	public String mypage(
		Model model
		, @MberUser MberVO mber
	) {
		LocalDate checkin;
		LocalDate checkout;
		long rsvtDay;

		String cstNo = mber.getCstNo();
		List<RsvtVO> mberRsvtList = rsvtService.retrieveMberRsvt(cstNo);

		List<RsvtDetailsVO> rsvtDetailList;
		String rsvtNo;
		int rsvtCnt = mberRsvtList.size();

		for (int i = 0; i < rsvtCnt; i++) {
			checkin = mberRsvtList.get(i).getRsvtCheckinYmd();
			checkout = mberRsvtList.get(i).getRsvtCheckoutYmd();
			rsvtDay = ChronoUnit.DAYS.between(checkin, checkout);

			mberRsvtList.get(i).setRsvtDay(rsvtDay);
			rsvtNo = mberRsvtList.get(i).getRsvtNo();
			rsvtDetailList = rsvtService.retrieveRsvtDetails(rsvtNo);

			mberRsvtList.get(i).setRsvtDetails(rsvtDetailList);
			model.addAttribute("mberRsvtList", mberRsvtList);
		}
		
		user = service.retrieveUser(cstNo);
		
		model.addAttribute("user", user);
		
		return "cstmr/myinfo/mypage";
	}

	@GetMapping("/mileageList.do")
	public String mileageList() {
		return "cstmr/myinfo/mypage/mileageList";
	}

	@GetMapping("/couponList.do")
	public String couponList() {
		return "cstmr/myinfo/mypage/couponList";
	}
	
	@GetMapping("/updateInfo.do")
	public String updateInfoForm() {
		return "cstmr/myinfo/mypage/updateInfo";
	}

	// 개인정보 업데이트 컨트롤러
	@PostMapping("/updateInfo.do")
	public String updateInfoProcess(
		@Validated(UpdateGroup.class) @ModelAttribute RegistVO modMber
		, BindingResult errors
		, Model model
	) {
		String logicalViewName = null;
		String message = null;
		
		if (!errors.hasErrors()) {

			model.addAttribute("message", message);
		} else {

		}
		return logicalViewName;
	}
	
	@GetMapping("/mypwchange.do")
	public String mypwchange() {
		return "cstmr/myinfo/mypage/mypwchange";
	}
	
	@GetMapping("/secsn.do")
	public String secsn() {
		return "cstmr/myinfo/mypage/secsn";
	}

	@GetMapping("mbrshSetle.do")
	public String mbrshSetle(
		Model model
	) {
		
		model.addAttribute("test", "test");
		return "cstmr/myinfo/mypage/mbrshSetle";
	}

	@GetMapping("/scrapList.do")
	public String scrapList() {
		return "cstmr/myinfo/mypage/scrapList";
	}
}
