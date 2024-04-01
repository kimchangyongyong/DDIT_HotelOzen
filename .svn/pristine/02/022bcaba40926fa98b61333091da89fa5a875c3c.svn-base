package kr.or.ddit.emp.pbl.dclz.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/emp/hrm/dclz/workingSchdl")
public class EmpWorkingSchdlController {
	@GetMapping("insert.do")
	public String insert() {
		return "emp/hrm/dclz/workingSchdl/workingSchdlForm";
	}
	
	@GetMapping("update.do")
	public String update() {
		return "emp/hrm/dclz/workingSchdl/workingSchdlEdit";
	}
	
	@GetMapping("delete.do")
	public String delete() {
		return "emp/hrm/dclz/workingSchdl/workingSchdlList";
	}
	
	@GetMapping
	public String view() {
		return "emp/hrm/dclz/workingSchdl/workingSchdlView";
	}
	
}
