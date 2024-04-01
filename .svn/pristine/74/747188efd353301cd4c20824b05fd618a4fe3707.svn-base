package kr.or.ddit.cstmr.rsvt.controller;

import java.security.Principal;
import java.sql.Timestamp;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.http.HttpRequest;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import kr.or.ddit.cstmr.rsvt.service.CstmrRsvtService;
import kr.or.ddit.global.security.MberUser;
import kr.or.ddit.global.vo.AttatchRmTypeVO;
import kr.or.ddit.global.vo.CstmrVO;
import kr.or.ddit.global.vo.MberVO;
import kr.or.ddit.global.vo.RecomRoomVO;
import kr.or.ddit.global.vo.RoomTypeVO;
import kr.or.ddit.global.vo.RsvtParamsVO;
import kr.or.ddit.global.vo.RsvtVO;
import kr.or.ddit.global.vo.SetleVO;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
@RequestMapping("cstmr/rsvt")
public class CstmrRsvtRmtRetrieveController {

	
	@Inject
	private CstmrRsvtService service;

	@PostMapping("rsvtStep01")
	public String rsvtStep01(
			@ModelAttribute RsvtParamsVO rsvtParams
			, HttpServletRequest request)
		throws ParseException {

		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		Date checkin = dateFormat.parse(rsvtParams.getRsvtCheckinYmd());
		Date checkout = dateFormat.parse(rsvtParams.getRsvtCheckoutYmd());

		int nbrCnt = rsvtParams.getAdultCnt() + rsvtParams.getChildCnt();
		long rsvtDays = checkout.getTime() - checkin.getTime();
		long rsvtDay = rsvtDays / (24 * 60 * 60 * 1000);

		Map<String, Object> rsvtRmtMap = new HashMap<>();
		rsvtRmtMap.put("rsvtCheckinYmd", rsvtParams.getRsvtCheckinYmd());
		rsvtRmtMap.put("rsvtCheckoutYmd", rsvtParams.getRsvtCheckoutYmd());
		rsvtRmtMap.put("childCnt", rsvtParams.getChildCnt());
		rsvtRmtMap.put("adultCnt", rsvtParams.getAdultCnt());
		rsvtRmtMap.put("nbrCnt", nbrCnt);
		rsvtRmtMap.put("rsvtRoomCnt", rsvtParams.getRsvtRoomCnt());
		rsvtRmtMap.put("rsvtDay",rsvtDay);

		HttpSession session = request.getSession();

		if (session.isNew()) {
			// 에러 처리
		}
		session.setAttribute("rsvtRmtMap", rsvtRmtMap);
		// 받은 파라미터 값으로 예약가능객실 조회 후 리스트에 저장
		List<RoomTypeVO> rsvtRmtList = service.retrieveRsvtRmt(rsvtRmtMap);

		if (!rsvtRmtList.isEmpty()) {
			Iterator<RoomTypeVO> value = rsvtRmtList.iterator();

			List<AttatchRmTypeVO> rmtListType = new ArrayList<>();

			while (value.hasNext()) {
				// 다음 요소의 RmtTypeCd를 저장
				String rmtTypeCd = value.next().getRmtTypeCd();

				// 조회한 RmtTypeCd로 객실타입 조회 후 저장
				AttatchRmTypeVO rmtList = service.retrieveRmt(rmtTypeCd);

				rmtListType.add(rmtList);
			}
			session.setAttribute("rmtListType", rmtListType);
			// 없을 시
		} else {

			session.setAttribute("error", "예약하실 수 있는 객실이 없습니다.");
		}

		return "redirect:rsvtStep01";
	}

	@GetMapping("rsvtStep01")
	public String rsvtStep01() {
		return "cstmr/rsvt/rsvtStep01";
	}

	@GetMapping("recomRsvtList")
	public String rcrmtList() {
		return "error/403";
	}

	@GetMapping("rsvtStep02")
	public String rsvtStep02() {
		return "cstmr/rsvt/rsvtStep02";
	}

	@PostMapping("rsvtStep02")
	public String rsvtStep02(
			@ModelAttribute RsvtParamsVO rsvtParams
			, HttpServletRequest request
			, @RequestParam("rmtTypeCd") String rmtTypeCd
		) {
		HttpSession session = request.getSession();
		AttatchRmTypeVO roomType = service.retrieveRmt(rmtTypeCd);

		session.setAttribute("roomType", roomType);
		return "redirect:rsvtStep02";
	}

	@PostMapping("rsvtStep03")
	public String rsvtStep03(
			@ModelAttribute CstmrVO cstmr
			, HttpServletRequest request
			, @MberUser MberVO mber
			, Principal authentication
		) {
		HttpSession session = request.getSession();
		Map<String, Object> rsvtData = new HashMap<>();
		
		// 객실타입
		AttatchRmTypeVO roomType = (AttatchRmTypeVO) session.getAttribute("roomType");
		log.info("@@@@roomType:{}",roomType);
		// 비회원 일시 고객정보 가져와야됨
		CstmrVO rsvtNber = (CstmrVO) session.getAttribute("rsvtNber");
		log.info("@@@@rsvtNber:{}",rsvtNber);
		// 예약정보
		Map<String, Object> rsvtRmtMap = (Map<String, Object>) session.getAttribute("rsvtRmtMap");
		log.info("@@@@rsvtRmtMap:{}",rsvtRmtMap);
		// 결제정보
		SetleVO setleMap = (SetleVO) session.getAttribute("setle");
		log.info("@@@@setleMap:{}",setleMap);
		
		
		rsvtData.put("rsvtRmtMap", rsvtRmtMap);
		rsvtData.put("roomType",roomType);
		rsvtData.put("setleMap",setleMap);
		
		
		
		String realUser = mber.getCstNo();
		MberVO realMber = service.retrieveMber(realUser);
		session.setAttribute("realMber", realMber);
		
		
		
		
		return "redirect:rsvtStep03";
	}

	@GetMapping("rsvtStep03")
	public String rsvtStep03() {
		return "cstmr/rsvt/rsvtStep03";
	}

	
	@PostMapping(value="rsvtEnd", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public String rsvtEnd(
			@RequestBody Map<String, Object> setleMap
			, HttpServletRequest request
			, @MberUser MberVO mber
			, Principal authentication
		) {
		HttpSession session = request.getSession();

		
		return "redirect:rsvtEnd";
	}
	
	
	@PostMapping("rsvtSetle")
	public String rsvtSetle(
			@ModelAttribute SetleVO setle
			, HttpServletRequest request
		) {
		HttpSession session = request.getSession();
		log.info("setle@@@:{}",setle);
		session.setAttribute("setle", setle);
		return "redirect:rsvtStep03";
	}
	
	@PostMapping("rsvtNber")
	public String rsvtNber(
			@ModelAttribute CstmrVO rsvtNber
			, HttpServletRequest request
			) {
		HttpSession session = request.getSession();
		log.info("rsvtNber@@@:{}",rsvtNber);
		session.setAttribute("rsvtNber", rsvtNber);
		return "redirect:rsvtStep03";
	}

	
	
	
	
	@GetMapping("rsvtEnd")
	public String rsvtEnd() {
		return "cstmr/rsvt/rsvtEnd";
	}
	
	
	
	@PostMapping("recomRsvtList")
	public String rcRmList(String adult, String child, Model model) {
		int totalNmpr = Integer.parseInt(adult) + Integer.parseInt(child);
		String cstNo = "M2400019"; // 추후 가져와야됨.
		CstmrVO cstmr = service.retrieveCstmrAge(cstNo);
		String age = cstmr.getAge();

		Map<String, Object> customerData = new HashMap<>();
		customerData.put("age", age);
		customerData.put("totalNmpr", totalNmpr);

		List<RecomRoomVO> rcRm = service.retrieveRcRm(customerData);
		model.addAttribute("rcRm", rcRm);
		log.info("######################rcRm:{}", rcRm);

		String rmType1 = rcRm.get(0).getRermRmtype();
		String rmType2 = rcRm.get(1).getRermRmtype();

		log.info("##########################rmType1:{}", rmType1);

		AttatchRmTypeVO attRmt1 = service.retrieveRmt(rmType1);
		AttatchRmTypeVO attRmt2 = service.retrieveRmt(rmType2);

		log.info("##########################attRmt1:{}", attRmt1);

		Map<String, AttatchRmTypeVO> attRmtMap = new HashMap<>();
		attRmtMap.put("attRmt1", attRmt1);
		attRmtMap.put("attRmt2", attRmt2);

		log.info("attRmtMap:{}", attRmtMap);

		model.addAttribute("attRmtMap", attRmtMap);

		return "cstmr/rsvt/recomRsvtList";
	}

}
