package kr.or.ddit.cstmr.intrcn.mbrsh.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/mbrsh")
public class CstmrMbrshController {
	@GetMapping
	public String mbrshList() {
		return "cstmr/intrcn/mbrsh/mbrshList";
	}
	@GetMapping("{mbsGrdCd}")
	public String mbrshView(
		@PathVariable String mbsGrdCd
			) {
		return "cstmr/intrcn/mbrsh/mbrshView";
	}
}
