package kr.or.ddit.cstmr.myinfo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import kr.or.ddit.global.validate.UpdateGroup;
import kr.or.ddit.global.vo.RegistVO;

@Controller
@RequestMapping("/myinfo")
public class CstmrMyInfoController {

	@GetMapping("/mypage.do")
	public String mypage() {
		return "cstmr/myinfo/mypage";
	}

	@GetMapping("/updateInfo.do")
	public String updateInfoForm() {
		return "cstmr/myinfo/mypage/updateInfo";
	}

	// 개인정보 업데이트 메서드
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
	
	@GetMapping("mbrshSetle.do")
	public String mbrshSetle(
		Model model
	) {
		
		model.addAttribute("test", "test");
		return "cstmr/myinfo/mypage/mbrshSetle";
	}
}
