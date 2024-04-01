package kr.or.ddit.emp.hrm.pay.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/emp/hrm/pay/payslip")
public class HrmPayController {
	
	@GetMapping("insert")
	public String insert() {
		return "emp/hrm/pay/payForm";
	}
	
	@GetMapping("delete")
	public String delete() {
		return "emp/hrm/pay/payEdit";
	}
	
	@GetMapping("update")
	public String update() {
		return "emp/hrm/pay/payView";
	}
	
	@GetMapping
	public String List() {
		return "emp/hrm/pay/payList";
	}

}
