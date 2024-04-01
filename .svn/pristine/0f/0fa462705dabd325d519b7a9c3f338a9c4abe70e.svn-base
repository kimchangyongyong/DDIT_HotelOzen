package kr.or.ddit.emp.hrm.emply.controller;

import javax.inject.Inject;

import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import kr.or.ddit.emp.hrm.emply.service.HrmEmpService;
import kr.or.ddit.global.vo.HrmEmpVO;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
@RequestMapping("/emp/hrm/emply")
public class HrmEmpInsertDeleteController {
	
	public static final String MODELNAME = "hrmEmp";
	
	
	@Inject
	private HrmEmpService service;

	@GetMapping("insert")
	public String insert(Model model) {
		String newEmpNo= service.createHrmEmpNo();
		model.addAttribute("newEmpNo", newEmpNo);
		return "emp/hrm/emply/empForm";
	}
	
	@PostMapping(value="insert", produces = MediaType.APPLICATION_JSON_VALUE)
	public void insert(
//			@RequestBody HrmEmpVO hrmEmpVO
			@ModelAttribute(MODELNAME) HrmEmpVO hrmEmpVO
			, Model model
			
			) {
		
		log.info("hrmEmpVO: {}",hrmEmpVO );
		
		service.createHrmEmp(hrmEmpVO);
//		model.addAttribute("empNo", hrmEmpVO.getEmpNo());
//		model.addAttribute("empNm", hrmEmpVO.getEmpNm());
		
		//return "emp/hrm/emply/empForm";
	}
	
	@GetMapping("delete")
	public String delete() {
		return "emp/hrm/emply/empDelete";
	}
}
