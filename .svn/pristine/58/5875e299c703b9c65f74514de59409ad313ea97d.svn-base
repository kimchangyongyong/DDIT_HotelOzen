package kr.or.ddit.emp.hrm.emply.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
@RequestMapping("/emp/hrm/emply")
public class HrmEmpInsertDeleteController {

	@GetMapping("insert")
	public String insert() {
		log.info("어디에서 오류나는지 확인하기 위함..........");
		return "emp/hrm/emply/empForm";
	}
	
	@GetMapping("delete")
	public String delete() {
		return "emp/hrm/emply/empDelete";
	}
}
