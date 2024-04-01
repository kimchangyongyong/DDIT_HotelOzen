package kr.or.ddit.emp.pos.sanctn.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/emp/pos/sanctn")
public class EmpPosSanctnController {

	@GetMapping
	public String sanctnList() {
		return "emp/pos/sanctn/sanctnList";
	}
	
	@GetMapping("{rqstCd}")
	public String sanctnView(
		@PathVariable String rqstCd	
		) {
		return "emp/pos/sanctn/sanctnView";
	}
}
