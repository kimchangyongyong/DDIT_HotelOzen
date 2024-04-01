package kr.or.ddit.emp.pos.acnt.spending.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/emp/pos/acnt/spending")
public class EmpPosSpendingController {

	@GetMapping
	public String spendingList() {
		return "emp/pos/acnt/spending/spendingList";
	}
	
	@GetMapping("{cd}")
	public String spendingView(
		@PathVariable String cd	
		) {
		return "emp/pos/acnt/spending/spendingView";
	}
}
